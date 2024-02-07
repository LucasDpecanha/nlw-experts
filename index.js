const perguntas = [
  {
    pergunta: "Qual é o valor de pi (π)?",
    resposta: [
      "3.14",
      "2.71",
      "1.62"
    ],
    correta: 0
  }, 
  {
    pergunta: "Quanto é 5 x 8?",
    resposta: [
      "10",
      "40",
      "25"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a raiz quadrada de 64?",
    resposta: [
      "6",
      "8",
      "10"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o teorema de Pitágoras?",
    resposta: [
      "A soma dos ângulos de um triângulo é 180 graus.",
      "a² + b² = c² para um triângulo retângulo.",
      "A área de um círculo é πr²."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o valor de sen(90°)?",
    resposta: [
      "0",
      "1",
      "-1"
    ],
    correta: 1
  },
  {
    pergunta: "Quanto é 12 ÷ 4?",
    resposta: [
      "2",
      "3",
      "4"
    ],
    correta: 1
  },
  {
    pergunta: "Quanto é o logaritmo de 100 na base 10?",
    resposta: [
      "1",
      "2",
      "3"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o valor de √(-1)?",
    resposta: [
      "0",
      "1",
      "i"
    ],
    correta: 2
  },
  {
    pergunta: "Quanto é 2 elevado a 5 (2^5)?",
    resposta: [
      "8",
      "16",
      "32"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado de 3! (fatorial de 3)?",
    resposta: [
      "3",
      "6",
      "9"
    ],
    correta: 1
  }
];

// puxar o template do HTML
  const quiz = document.querySelector('#quiz') 
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta

// colocar as três opcões de respostas
     for(let resposta of item.resposta) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.resposta.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }

       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }


       quizItem.querySelector('dl').appendChild(dt)
     }

// remove a opção que não é necessária
     quizItem.querySelector('dl dt').remove()

     // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
