<template>
  <div class="hello">
    <div class="block">
      <div class="languages">
          <span>Выберите язык для ввода</span>
          <select v-model="sourceLanguageCode">
              <option v-for="lang in languages" v-bind:value="lang.value" v-bind:key="lang.value">
                {{ lang.name }}
              </option>
          </select>
      </div>
      <textarea type="text" v-model="sourceText" />
    </div>
    <div class="button">
      <button type="button" v-on:click="translateText()">
        Перевести
      </button>
    </div>
    <div class="block">
      <div class="languages">
          <span>Выберите язык для вывода</span>
          <select v-model="destLanguageCode">
              <option v-for="lang in languages" v-bind:value="lang.value" v-bind:key="lang.value">
                {{ lang.name }}
              </option>
          </select>
      </div>
      <textarea type="text" v-model="resultText" readonly />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Translator',
  props: {
    msg: String
  },
  data: function() {
    return {
      sourceText: null,
      resultText: null,
      languages: [{name: "русский", value: "ru"}, {name: "английский", value: "en"}, {name: "немецкий", value: "de"}, {name: "французский", value: "fr"}],
      sourceLanguageCode: "ru",
      destLanguageCode: "en"
    }
  },
  methods: {
    translateText() {
      this.resultText = null;
      if (!this.sourceText) {
        return;
      }

      fetch(`http://localhost:3000/?translate=${this.sourceText}&lang1=${this.sourceLanguageCode}&lang2=${this.destLanguageCode}`)
        .then((response) => {
          if (response.ok) { // если HTTP-статус в диапазоне 200-299
            response.json().then(jsonBody => {
              if (jsonBody && jsonBody.length > 0) {
                this.resultText = jsonBody[0].translatedText;
              }
            });
          } else {
            alert("Ошибка HTTP: " + response.status);
          }
        })
        .catch(err => {
          console.log('catch', err);
        });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.hello {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}

select {
  border-radius: 3px;
  border-style: solid;
}

div.languages {
  margin-bottom: 3px;
}

textarea {
  min-width: 300px;
  min-height: 100px;
  margin-left: 20px;
  margin-right: 20px;
  resize: none;
  border-radius: 5px;
  border-style: solid;
}

button {
  height: 30px;
  margin-top: 60px;
  border-radius: 5px;
  border-style: solid;
}

span {
  margin-right: 5px;
}
</style>
