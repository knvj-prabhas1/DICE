function diceroll(){
    const dice_count = document.getElementById('dice_count').value;
    const Dice_result = document.getElementById('Dice_result');
    const dice_image = document.getElementById('dice_image');

    if(dice_count === '0'){
        
        Dice_result.textContent = 'Plzz enter atleast 1 Dice to roll 😉';
    }
    else if(dice_count < 0){
        Dice_result.textContent = 'Invalid!! Starts with 1';
    }
    else{
        console.log('no error')
    }

    
    

    const values = [];
    const images = [];

   

    for(let i = 0; i < dice_count; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice/${value}.png" alt="Dice ${value}"> ` );

        Dice_result.textContent = `Dice faces : ${values.join(', ')}`;
        
    }

    dice_image.innerHTML = images.join('');
}

    




