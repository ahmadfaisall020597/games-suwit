var imgComputer = document.querySelectorAll('button')[1];
var ScoreBoard = document.getElementById('hasil');
var playerHero = document.getElementById('playerHero');
var comHero = document.getElementById('comHero');
var playerPoin = 0;
var comPoin = 0

function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) { imgComputer.replaceChildren('👊'); return 'batu'; }

    if (comp >= 0.34 && comp < 0.67) { imgComputer.replaceChildren('✌'); return 'gunting'; }

    imgComputer.replaceChildren('✋'); return 'kertas';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'batu') return (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    if (player == 'gunting') return (comp == 'batu') ? 'KALAH!' : 'MENANG!';
    if (player == 'kertas') return (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
    if (player == 'batu') return (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
    return 'VS';
}

const pBatu = document.getElementsByClassName('batu')[0];
const pGunting = document.getElementsByClassName('gunting')[0];
const pKertas = document.getElementsByClassName('kertas')[0];

function putar() {
    let imgComputer = document.querySelector('button');
    let gambar = ['👊', '✌', '✋'];
    let i = 0;
    let waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.replaceChildren(gambar[i++]);
        if (i == gambar.length) i = 0
    }, 100)
    setTimeout(function () {
        imgComputer.style.opacity = ('0')
        const imgCom = document.querySelectorAll('button')[1];
        imgCom.style.opacity = '0'
        imgComputer.style.display = 'inline'
    }, 1000)
}

const Pilihan = document.querySelectorAll('button');
Pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let imgComputer = document.querySelector('button');
        imgComputer.style.opacity = '0.7';
        imgComputer.style.display = 'inline'
        const imgCom = document.querySelectorAll('button')[1];
        imgCom.style.opacity = '0'
        imgCom.style.display = 'none'
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar()

        setTimeout(function () {
            const score = ScoreBoard.replaceChildren(hasil);
            console.log('Com :' + pilihanComputer);
            console.log('p :' + pilihanPlayer);
            console.log('Hasil :' + hasil);
            const imgComputer = document.querySelector('button')
            const imgCom = document.querySelectorAll('button')[1];
            imgComputer.style.display = 'none'
            imgCom.style.display = 'inline'
            imgCom.style.opacity = '1'
            if (hasil == 'MENANG!') {
                playerPoin += 1;
            }
            if (hasil == 'KALAH!') {
                comPoin += 1;
            }
            playerHero.replaceChildren(playerPoin);
            comHero.replaceChildren(comPoin);
        }, 1000)

    })
})



// pBatu.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     if (hasil == 'MENANG!') {
//         playerPoin += 1;
//     }
//     if (hasil == 'KALAH!') {
//         comPoin += 1;
//     }
//     playerHero.replaceChildren(playerPoin);
//     comHero.replaceChildren(comPoin);
//     console.log('Com :' + pilihanComputer);
//     console.log('p :' + pilihanPlayer);
//     console.log('Hasil :' + hasil);
//     const score = ScoreBoard.replaceChildren(hasil);
// })
// pGunting.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     if (hasil == 'MENANG!') {
//         playerPoin += 1;
//     }
//     if (hasil == 'KALAH!') {
//         comPoin += 1;
//     }
//     playerHero.replaceChildren(playerPoin);
//     comHero.replaceChildren(comPoin);
//     console.log('Com :' + pilihanComputer);
//     console.log('p :' + pilihanPlayer);
//     console.log('Hasil :' + hasil);
//     const score = ScoreBoard.replaceChildren(hasil);
// })
// pKertas.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
//     if (hasil == 'MENANG!') {
//         playerPoin += 1;
//     }
//     if (hasil == 'KALAH!') {
//         comPoin += 1;
//     }
//     playerHero.replaceChildren(playerPoin);
//     comHero.replaceChildren(comPoin);
//     console.log('Com :' + pilihanComputer);
//     console.log('p :' + pilihanPlayer);
//     console.log('Hasil :' + hasil);
//     const score = ScoreBoard.replaceChildren(hasil);
// })