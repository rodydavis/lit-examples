import * as vscode from "vscode";

const WEB_DIR: string = "build";
const WEB_SCRIPT: string = "main.js";
const TITLE: string = "Lit Example";
const TAG: string = "my-element";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("lit.start", () => {
      Panel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("lit.reset", () => {
      if (Panel.currentPanel) {
        Panel.currentPanel.sendMessage("reset");
      }
    })
  );

  if (vscode.window.registerWebviewPanelSerializer) {
    vscode.window.registerWebviewPanelSerializer(Panel.viewType, {
      async deserializeWebviewPanel(
        webviewPanel: vscode.WebviewPanel,
        state: any
      ) {
        console.log(`Received state: ${state}`);
        webviewPanel.webview.options = getWebviewOptions(context.extensionUri);
        Panel.revive(webviewPanel, context.extensionUri);
      },
    });
  }
}

function getWebviewOptions(extensionUri: vscode.Uri): vscode.WebviewOptions {
  return {
    enableScripts: true,
    localResourceRoots: [vscode.Uri.joinPath(extensionUri, WEB_DIR)],
  };
}

class Panel {
  public static currentPanel: Panel | undefined;
  public static readonly viewType = "litExample";
  private _disposables: vscode.Disposable[] = [];

  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;
    if (Panel.currentPanel) {
      Panel.currentPanel.panel.reveal(column);
      return;
    }
    const panel = vscode.window.createWebviewPanel(
      Panel.viewType,
      TITLE,
      column || vscode.ViewColumn.One,
      getWebviewOptions(extensionUri)
    );
    Panel.currentPanel = new Panel(panel, extensionUri);
  }

  public static revive(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    Panel.currentPanel = new Panel(panel, extensionUri);
  }

  private constructor(
    public readonly panel: vscode.WebviewPanel,
    public readonly extensionUri: vscode.Uri
  ) {
    this._update();
    this.panel.onDidDispose(() => this.dispose(), null, this._disposables);
    this.panel.onDidChangeViewState(
      (_) => {
        if (this.panel.visible) {
          this._update();
        }
      },
      null,
      this._disposables
    );
    this.panel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.command) {
          case "alert":
            vscode.window.showErrorMessage(message.text);
            return;
        }
      },
      null,
      this._disposables
    );
  }

  public sendMessage(command: string) {
    this.panel.webview.postMessage({ command: command });
  }

  public dispose() {
    Panel.currentPanel = undefined;
    this.panel.dispose();
    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _update() {
    const webview = this.panel.webview;
    webview.html = this._getHtmlForWebview(webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const scriptPathOnDisk = vscode.Uri.joinPath(
      this.extensionUri,
      WEB_DIR,
      WEB_SCRIPT
    );
    const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
    const nonce = getNonce();

    const slot = "<p>This is child content</p>";

    const htmlSource = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${TITLE}</title>
      </head>
      <body class="vscode-light">
        <${TAG} nonce="${nonce}" >
          ${slot}
        </${TAG}>
        <script nonce="${nonce}" type="module" src="${scriptUri}"></script>
      </body>
    </html>`;

    return htmlSource;
  }
}

const possible = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
].join("");

function getNonce() {
  let text = "";
  for (let i = 0; i < 32; i++) {
    const char = possible.charAt(Math.floor(Math.random() * possible.length));
    text += char;
  }
  return text;
}
