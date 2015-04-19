export default {

  "default": {
    "amarelo": {
      "label": "Amarelo"
    },

    "azul": {
      "label": "Azul"
    },

    "vermelho": {
      "label": "Vermelho"
    },
  },

  "combinations": {
    "verde": {
      "label": "Verde",
      "requirements": [ "amarelo", "azul" ]
    },

    "roxo": {
      "label": "Roxo",
      "requirements": [ "vermelho", "azul" ]
    },

    "laranja": {
      "label": "Laranja",
      "requirements": [ "amarelo", "vermelho" ]
    },
  }

}
