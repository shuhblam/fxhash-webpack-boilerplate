function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
  for (var input of midiAccess.inputs.values()){
      input.onmidimessage = getMIDIMessage;
  }
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );


function getMIDIMessage(midiMessage) {
  switch(midiMessage.data[1]){
    case 0:
      midi0 = midiMessage.data[2];
      break
    case 1:
      midi1 = midiMessage.data[2];
      break;
    case 2:
      midi2 = midiMessage.data[2];
      break
    case 3:
      midi3 = midiMessage.data[2];
      break;
    default:
      return
  }
}