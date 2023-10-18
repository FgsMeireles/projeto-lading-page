var SetaDireita = window.document.getElementById('seta-direita')
var Leonardo = window.document.getElementById ('leonardo')
var Bruna = window.document.getElementById('Bruna')
var Samantha = window.document.getElementById('samanta')
var SetaEsquerda = window.document.getElementById('seta-esquerda')

function RolarParaDireita() {
   Bruna.style = 'display: none'
   Samantha.style = 'display: flex'
   SetaDireita.style =  'display: none'
   SetaEsquerda.style =  'display: flex; margin-top: 117px'
}

function RolarParaEsquerda(){
   Bruna.style = 'display: flex'
   Samantha.style = 'display: none'
   SetaDireita.style = 'diplay: flex; margin-top: 98px'
   SetaEsquerda.style = 'display: none'

}