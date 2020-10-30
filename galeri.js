const big = document.querySelector('.jumbo');
const thumb = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

// thumb.forEach(function(a){
// 	a.addEventListener('click',function(){
// 		console.log(a);
// 	})
// })

//////////////////cara1//////////////////////////////
// for (let a=0 ; a<thumb.length ; a++){
// 	thumb[a].addEventListener('click',function(){
// 		big.setAttribute('src','img/'+(a+1)+'.jpg');
// 	})
// }
//////////////////cara1//////////////////////////////


//////////////////cara2//////////////////////////////
container.addEventListener('click',function(e){
	//cek apakah yang diklik adalah thumb
	console.log(e.target);

	if (e.target.className == "thumb"){
		big.src = e.target.src;
		big.classList.add('fade');
		setTimeout(function(){
			big.classList.remove('fade');
		},500) 
		// nah si timeout ini tuh digunain biar setiap 0,5 milisecond , si class fade nya kehapus ,soalnya kalau ga kehapus efek fade nya hanya berjalan pertama kali saja
	}

	thumb.forEach(function(witch){ //parameter witch gunanya untuk mengambil salah satu elemen , nah witch itu jadi variabel baru
		// if(witch.classList.contains ('active') ){
		// 	witch.classList.remove('active')
		// } kalau itu dengan cara mengecek dulu

		witch.className = 'thumb'; //cara 2 mau kelasnya apapun ubah jadi thumb
 	})

	e.target.classList.add('active'); //target itu maksudnya thumbnail manapun yang kita klik
})


// keterangan:
// cara 2 lebih panjang karena sudah ditambah berbagai efek
