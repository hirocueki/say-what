import { ref } from "vue";

export function useSpeech() {
  var synth = window.speechSynthesis;
  const textToSpeech = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.voice =
      window.speechSynthesis
        .getVoices()
        .find((voice) => voice.lang === "en-US") ||
      window.speechSynthesis.getVoices()[0];

    utter.onstart = () => {};
    utter.onerror = function (event) {
      console.log("Error: " + event.utterance.text);
    };
    utter.onend = function (event) {};
    // speech API がロックした場合の対処
    // see: https://1-notes.com/javascript-speech-synthesis-cause-of-no-sound/
    synth.cancel();

    synth.speak(utter);
  };
  return { textToSpeech };
}
