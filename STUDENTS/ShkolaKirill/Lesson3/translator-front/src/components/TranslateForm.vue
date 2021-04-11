<template>
    <div class="form">
        <h1 class="form-title">Переводчик</h1>
        <div class="form__input">
            <form class="form__input-lang1">
                <span>Выберите один из языков</span>
                <div>
                    <select v-model="lang1">
                        <option v-for="lang in langs" v-bind:key="lang.value" v-bind:value="lang.value">{{lang.name}}</option>
                    </select>
                </div>
                <textarea type="text" v-model="input" id="lang1" cols="40" rows="6"></textarea>
            </form>
            <button type="button" v-on:click="translate()" class="form-translate">==></button>
            <form class="form__input-lang2">
                <span>Выберите один из языков</span>
                <div>
                    <select v-model="lang2">
                        <option v-for="lang in langs" v-bind:key="lang.value" v-bind:value="lang.value">{{lang.name}}</option>
                    </select>
                </div>
                <textarea type="text" v-model="output" id="lang2" cols="40" rows="6" readonly></textarea>
            </form>
        </div>
  </div>
</template>

<script>
// import { json, response } from 'express';
export default {
    name: 'TranslateForm',
    data() {
        return {
            input: null,
            output: null,
            langs: [
                {
                    name: 'Русский',
                    value: 'ru'
                },
                {
                    name: 'Английский',
                    value: 'en'
                },
                {
                    name: 'Японский',
                    value: 'ja'
                },
                {
                    name: 'Вьетнамский',
                    value: 'vi'
                }
            ],
            lang1: "ru",
            lang2: "en"
        }
    },

    methods: {
        translate() {
            this.resultText = null;
            if (!this.sourceText) {
            return;
            }
            fetch(`http://localhost:3000/?translate=${this.input}&lang1=${this.lang1}&lang2=${this.lang2}`)
            .then((response) => {
                if (response.ok) {
                response.json().then(jsonBody => {
                    if (jsonBody && jsonBody.length > 0) {
                    this.output = jsonBody[0].translatedText;
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

<style>
    .form__input {
        display: flex;
        justify-content: center;
        align-items: cenid
    }

    .form__input-lang1>div {
        display: flex;
    }

    .form__input-lang2>div {
        display: flex;
    }

    .form-translate {
        height: 30px;

    }
</style>