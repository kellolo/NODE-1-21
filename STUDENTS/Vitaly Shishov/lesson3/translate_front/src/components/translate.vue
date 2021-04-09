<template>
  <div class="wrap">
    <div>
      <div class="languages">
          <span>Исходный текст</span>
          <select v-model="inLanguage">
              <option v-for="lang in languages" v-bind:value="lang.value" v-bind:key="lang.value">
                {{ lang.name }}
              </option>
          </select>
      </div>
      <textarea type="text" v-model="inText" />
    </div>
    <div class="button">
      <button type="button" v-on:click="translateText()">
        Перевести
      </button>
    </div>
    <div>
      <div class="languages">
          <span>Перевод</span>
          <select v-model="outLanguage">
              <option v-for="lang in languages" v-bind:value="lang.value" v-bind:key="lang.value">
                {{ lang.name }}
              </option>
          </select>
      </div>
      <textarea type="text" v-model="outText" readonly />
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
      inText: null,
      outText: null,
      languages: [{name: "русский", value: "ru"}, {name: "английский", value: "en"}, {name: "немецкий", value: "de"}],
      inLanguage: "ru",
      outLanguage: "en"
    }
  },
  methods: {
    translateText() {
      this.outText = null;
      if (!this.inText) {
        return;
      }

      fetch(`http://localhost:3000/?translate=${this.inText}&lang1=${this.inLanguage}&lang2=${this.outLanguage}`)
        .then((response) => {
          if (response.ok) {
            response.json().then(jsonBody => {
              if (jsonBody && jsonBody.length > 0) {
                this.outText = jsonBody[0].translatedText;
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
  background-color: rgb(93, 169, 255);
}

div.languages {
  margin-bottom: 3px;
}

textarea {
  min-width: 500px;
  min-height: 200px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 3px;
  border-style: solid;
}

button {
  height: 30px;
  background-color:lightblue;
  margin-top: 60px;
  border-radius: 3px;
  border-style: solid;
}

span {
  margin-right: 5px;
}
</style>
