export class Synth {
  triggerAttackRelease() {}
  toDestination() { return this; }
}

export class PolySynth {
  triggerAttackRelease() {}
  toDestination() { return this; }
}

const toneMock = {
  Synth,
  PolySynth,
};

export default toneMock;