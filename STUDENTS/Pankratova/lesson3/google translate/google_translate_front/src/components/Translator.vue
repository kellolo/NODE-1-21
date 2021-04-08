<template>
  <div class="wrap">
    <div>
      <div class="languages">
          <span>Выберите язык для ввода</span>
          <select v-model="startLanguage">
              <option v-for="lang in languages" v-bind:value="lang.value" v-bind:key="lang.value">
                {{ lang.name }}
              </option>
          </select>
      </div>
      <textarea type="text" v-model="startText" />
    </div>
    <div class="button">
      <button type="button" v-on:click="translateText()">
        Перевести
      </button>
    </div>
    <div>
      <div class="languages">
          <span>Выберите язык для вывода</span>
          <select v-model="outLanguage">
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
      startText: null,
      resultText: null,
      languages: [{name: "русский", value: "ru"}, {name: "английский", value: "en"}],
      startLanguage: "ru",
      outLanguage: "en"
    }
  },
  methods: {
    translateText() {
      this.resultText = null;
      if (!this.startText) {
        return;
      }

      fetch(`http://localhost:3000/?translate=${this.startText}&lang1=${this.startLanguage}&lang2=${this.outLanguage}`)
        .then((response) => {
          if (response.ok) {
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

div.wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}

select {
  border-radius: 3px;
  border-style: solid;
  background-color: rgb(64, 185, 233);
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
