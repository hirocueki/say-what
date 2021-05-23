<template>
  <button
    v-if="!showAnswer"
    class="
      rounded-full
      w-24
      h-24
      bg-blue-100
      border-2 border-blue-500
      p-1
      mb-8
      shadow-md
    "
    @click="textToSpeech(question.collect)"
  >
    問題を聞く
  </button>
  <button
    :disabled="!existsNext"
    @click="nextQuestion"
    class="
      disabled:opacity-50
      rounded-full
      w-24
      h-24
      bg-yellow-100
      border-2 border-yellow-500
      p-1
      mb-8
      shadow-md
    "
    v-else
  >
    次の問題
  </button>
  <div class="question">
    <div
      @click="handleAnswer"
      class="answer"
      v-for="answer in question.answers"
      :key="answer"
    >
      <div class="answer-icon h-12 w-12" v-if="showAnswer">
        <fa
          icon="check-circle"
          size="2x"
          v-if="answer === question.collect"
          class="absolute right-0 top-0 text-green-600"
        />
        <fa
          icon="times-circle"
          size="2x"
          v-else
          class="absolute right-0 top-0 h-12 w-12 text-red-600"
        />
      </div>
      {{ answer }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch, computed } from "vue";
import { useSpeech } from "../hooks/useSpeech";
import { useQuestion, Question } from "../hooks/useQuestion";
// import { XCircleIcon, CheckCircleIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "HelloWorld",
  // components: { XCircleIcon, CheckCircleIcon },
  props: {},
  setup: () => {
    const showAnswer = ref(false);
    const handleAnswer = () => {
      showAnswer.value = true;
    };
    const text = ref("Hello");
    const { textToSpeech } = useSpeech();
    const { questions } = useQuestion();
    const currentQuestionNo = ref(0);
    const question = ref(questions[currentQuestionNo.value]);

    const existsNext = computed(() => {
      return currentQuestionNo.value + 1 < questions.length;
    });
    const nextQuestion = () => {
      showAnswer.value = false;
      currentQuestionNo.value++;
      question.value = questions[currentQuestionNo.value];
    };

    return {
      textToSpeech,
      text,
      question,
      showAnswer,
      handleAnswer,
      nextQuestion,
      existsNext,
    };
  },
});
</script>

<style scoped>
body {
  background: #f5f5f5;
}
.question {
  @apply grid grid-rows-2 grid-flow-col gap-6 h-48 w-48 mx-auto justify-items-center;
}
.answer {
  @apply text-2xl shadow-md;
  @apply relative flex w-24 h-24 text-gray-900 bg-gray-100 border-2 border-gray-400 rounded-lg justify-center items-center;
  @apply hover:bg-gray-400 focus:ring-0;
}
.answer-icon {
  @apply absolute -right-5 -top-5 h-12 w-12 bg-white rounded-full shadow-md;
}
</style>
