const foods = [
    {
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
        title: "Rendang",
        rating: "⭐ 4.9"
    },
    {
        image: "https://images.unsplash.com/photo-1604908554027-2d77d8e6d5b5?q=80&w=800",
        title: "Sate Padang",
        rating: "⭐ 4.8"
    },
    {
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800",
        title: "Nasi Kapau",
        rating: "⭐ 4.7"
    }
];
let current = 0;

// menghindari error null
document.addEventListener("DOMContentLoaded", () => {
    const foodImage = document.getElementById("foodImage");
    const foodTitle = document.getElementById("foodTitle");
    const foodRating = document.getElementById("foodRating");
    const mainCard = document.querySelector(".main-card");

    function updateCard(){
        if(mainCard) mainCard.classList.add("animate");

        setTimeout(() => {
            if(foodImage) foodImage.src = foods[current].image;
            if(foodTitle) foodTitle.innerText = foods[current].title;
            if(foodRating) foodRating.innerText = foods[current].rating;
            if(mainCard) mainCard.classList.remove("animate");
        }, 200);
    }

    function nextFood(){
        current++;
        if(current >= foods.length){
            current = 0;
        }
        updateCard();
    }

    function prevFood(){
        current--;
        if(current < 0){
            current = foods.length - 1;
        }
        updateCard();
    }
    window.nextFood = nextFood;
    window.prevFood = prevFood;
    updateCard();
});