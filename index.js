const question = document.getElementById("question");
const answer = document.getElementById("answer");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

const botSay = (data) => {
  return [
    "Halo, Nama saya adalah Joice. Siapa nama Kamu?",
    `Haloo ${data?.nama}, berapa usia kamu?`,
    `ohh jadi begitu usia kamu ${data?.usia} tahun, sekarang kamu lagi menempuh pendidikan dimana?`,
    `${data?.pendidikan} woww cool, kalau sekarang sedang mencari ilmu atau lagi mendalami ilmu apa?`,
    `oh begitu kamu sedang menempuh pendidikan di ${data?.belajar}, yauda deh semoga sukses yaaa terus semangat belajarnya yaaa!!`,
  ];
};

let init = 0;
let userData = [];
question.innerHTML = botSay()[0];

function botStart() {
  init++;
  if (answer.value.length < 1) return alert("Masukan jawaban anda!");
  if (init === 1) {
    botDelay({ nama: answer.value });
  } else if (init === 2) {
    botDelay({ usia: answer.value });
  } else if (init === 3) {
    botDelay({ pendidikan: answer.value });
  } else if (init === 4) {
    botDelay({ belajar: answer.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(7px)";
  setTimeout(() => {
    question.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, 1000);
  userData.push(answer.value);
  answer.value = "";
}

function finishing() {
  question.innerHTML = `Thank u yaa ${userData[0]} udah mampir ke joice bot 😜, jangan lupa mampir lagi!`;
  answer.value = "Thank u juga yaaa!";
}

function botEnd() {
  alert(`Anda akan diarahkan ke menu utama`);
  window.location.reload();
}
