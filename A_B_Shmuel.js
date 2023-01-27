let menuDropdownBtn = document.querySelector('.menu_dropdown_btn');
let menuDropdownContent = document.querySelector('.menu_dropdown_content');
let cars_img = document.querySelector('.cars_img');
let i=0;
let numberOfCarsImages = 7;
let bikoretText = document.querySelector('.bikoret_text');
let bikoretName = document.querySelector('.bikoret_mame');
let bikoretF = document.querySelector('.nav_bikorot_item_f');
let bikoretG = document.querySelector('.nav_bikorot_item_g');
let bikoretZ = document.querySelector('.nav_bikorot_item_z');
let bikoretNextButton = document.querySelector('.bikoret_next');
let bikoretPrevButton = document.querySelector('.bikoret_prev');
let sendEmailButton = document.querySelector('.sendemail_button');
let bikorot = [
    {
        name:'אושרי ואירן קסוקר',
        bikoret:`<p>אני ואישתי הגענו מדימונה לעשות בדיקה לרכב קיבלנו שירות מעולה מבעל הבית והבת שלו הסבר ברמה הכי מקצועית מקום מומלץ 
        יצאת צדיק 🙏</p>`,
        src:'f',
        time:'26/08/21'
    },
    {
        name:'Nahum Kauffman',
        bikoret:`<p>שרות אמין ומקצועי. הוציא לי דוח ליקויים ואף אמר לי לחזור אליו לאחר הטיפול בשביל שיבדוק שאכן טופל. אני מרוצה מאוד ממליץ בחום</p>`,
        src:'g',
        time:'22/08/22'
    },
    {
        name:' מני ',
        bikoret:`
            <p class="fw-bold" >שירות מקצועי ואמין יחס אדיב</p>
            <p> מקום רגוע ונחמד יחס אישי ומקצועי אחרי הבדיקה של שמואל אני יודע שאני יכול לקנות בלב רגוע </p>`,
        src:'z',
        time:'23/02/2022'
    },
    {
        name:'Ilai Ben Shushan',
        bikoret:`<p>לפני 3 חודשים בדקתי את הרכב שלי אצל א.ב שמואל אני רק רוצה להגיד ששמואל לפני שהוא בעל מקצוע מדהים הוא בן אדם מיוחד ! עם יחס חם ואוהב לכל הלקוחות שלו, בן אדם שעוסק כבר 40 שנה במקצוע הזה פשוט בן אדם תותח ואמין !!
        ממליץ בחום לכל מי שקונה רכב בנתיבות והסביבה להיכנס אליו לבדיקת רכב !</p>`,
        src:'f',
        time:'03/11/2020'
    },
    {
        name:'eden zaguri',
        bikoret:`<p>תודה רבה לשמואל ולצוות העובדים על שרות מעל המצופה!
        אנשים הגונים ואמינים ממליצה בחום!!!</p>`,
        src:'g',
        time:'26/02/2022'
    },
    {
        name:'שירות זהב',
        bikoret:`<p>קיבלתי שירות מעולה, זמינות מהירה ולעניין, מקום איכותי, ממליץ בחום!</p>`,
        src:'z',
        time:'16/08/2022'
    },
    {
        name:'Ch Uri',
        bikoret:`<p>מקצוען מהרמה הגבוהה שייש. בבדיקה לפני קניה הכניס סיב אופטי לשילדה וגילה  הוחלף חלק מהשילדה  מומלץ ביותר לבדוק אצלו.</p>`,
        src:'f',
        time:'01/09/2020'
    },
    {
        name:'Matan Azulay',
        bikoret:`<p>המקום בודק רכבים בצורה הכי מקצועית שיש
        והשירות ברמה גבוהה מאוד מומלץ למי שמחפש שקט בבדיקה לרכב</p>`,
        src:'g',
        time:'20/07/22'
    },
    {
        name:'ebfogel',
        bikoret:`
        <p class="fw-bold" >א.ב שמואל - הבחירה הנכונה!</p>
        <p>שמואל קיבל אותנו בברכה, היה אדיב מאוד, מהיר ויעיל אבל הכי חשוב- יסודי ביותר ואיכפתי. הסביר לנו בסבלנות ובאדיבות את משמעות דוח הבדיקה. נעים לשלם עבור שירות כזה. אם יש אמונה- באה ברכה. ממליצים בחום לתת אמון בשמואל.</p>`,
        src:'z',
        time:'21/01/2022'
    },
    {
        name:'סיון שלומובה',
        bikoret:`<p>שרות אדיב, יחס מדהים, אנשים מדהימים!!
        ממליצה בחום רב 👌!!!!</p>`,
        src:'f',
        time:'06/03/2019'
    },
    {
        name:'יעל נעמו',
        bikoret:`<p>שירות מהממם!! אנשים טובים ממליצה בחום ואהבה, מאחר בדקתי כמה מכוני בדיקה שירות ואמינות כזאת לא הכרתי תודה רבה לכם!! שתצליחו מגיע לכם!!!!</p>`,
        src:'g',
        time:'08/01/2022'
    },
    {
        name:'אירן',
        bikoret:`
        <p class="fw-bold" >מקום מסודר עם שירות מעולה</p>
        <p>אתמול אני ואישתי הגענו מדימונה לעשות בדיקה לרכב שרצינו לקנות ופשוט בעל הבית והילדה שלו נתנו לנו שירות מעולה הוא אמר לנו את הבעיות של הרכב בצורה הכי יסודית מאוד מרוצה ותמשיכו לעבוד כך 🙏</p>`,
        src:'z',
        time:'26/08/2021'
    },
    {
        name:'טופז לוי',
        bikoret:`<p>שירות מעולה ואווו אין דברים כאלה קיבלו אותי וענו לי על שאלות וגם הסבירו בסוף , ממליצה בחום לכל מי שקונה ומוכר רכב</p>`,
        src:'g',
        time:'07/2022'
    },
    
    
];



//functions
 function slideImg(){
     i=i+1;
     if(i<numberOfCarsImages+1){
     cars_img.innerHTML=`<img src="/car${i}.jpeg" class="d-block w-100" alt="...">`;
    }
 };
 function slideImgback(){
    i=i-1;
    if(i>0){
    cars_img.innerHTML=`<img src="/car${i}.jpeg" class="d-block w-100" alt="...">`;
    }
};

let j = 0;

bikoretNextButton.addEventListener('click',()=>{
    j++;


    //content
    bikoretText.innerHTML=bikorot[j].bikoret;
    bikoretName.innerHTML=bikorot[j].name;

    //style
    if(bikorot[j].src=='g'){
        bikoretG.style.marginTop= "-15px";
        bikoretG.style.position= "absolute";
    }else{
        bikoretG.style.marginTop= "0px";
        bikoretG.style.position= "static";        
    }
    if(bikorot[j].src=='f'){
        bikoretF.style.marginTop= "-15px";
        bikoretF.style.position= "absolute";
    }else{
        bikoretF.style.marginTop= "0px";
        bikoretF.style.position= "static";        
    }
    if(bikorot[j].src=='z'){
        bikoretZ.style.marginTop= "-15px";
        bikoretZ.style.position= "absolute";
    }else{
        bikoretZ.style.marginTop= "0px";
        bikoretZ.style.position= "static";        
    }

});
bikoretPrevButton.addEventListener('click',()=>{
    j--;

    //content
    bikoretText.innerHTML=bikorot[j].bikoret;
    bikoretName.innerHTML=bikorot[j].name;
    //style
    if(bikorot[j].src=='g'){
        bikoretG.style.marginTop= "-15px";
        bikoretG.style.position= "absolute";
    }else{
        bikoretG.style.marginTop= "0px";
        bikoretG.style.position= "static";        
    }
    if(bikorot[j].src=='f'){
        bikoretF.style.marginTop= "-15px";
        bikoretF.style.position= "absolute";
    }else{
        bikoretF.style.marginTop= "0px";
        bikoretF.style.position= "static";        
    }
    if(bikorot[j].src=='z'){
        bikoretZ.style.marginTop= "-15px";
        bikoretZ.style.position= "absolute";
    }else{
        bikoretZ.style.marginTop= "0px";
        bikoretZ.style.position= "static";        
    }
})

let option = true;

menuDropdownBtn.addEventListener('click',()=>{
    if(option){
        menuDropdownContent.style.display = 'block';
        menuDropdownBtn.style.color ='rgb(161, 35, 35)';
        option = false;
    }else{
        menuDropdownContent.style.display = 'none';
        menuDropdownBtn.style.color ='black';
        option = true;
    }
})
function choosed(){
    option=true;
    menuDropdownContent.style.display = 'none';
    menuDropdownBtn.style.color ='black';
}

sendEmailButton.addEventListener('click',()=>{
    let name = document.querySelector('.input_name').value;
    let phone = document.querySelector('.input_phone').value;
    let email = document.querySelector('.input_mail').value;
    console.log(name,phone,email);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shmelsayadaab@gmail.com",
        Password : "94C1702A7D50A74470F74237822569FBE875",
        To : 'shmelsayadaab@gmail.com',
        From : "shmelsayadaab@gmail.com",
        Subject : "מייל חדש מהאתר",
        Body : `
        שם:${name} <br>פלאפון:${phone} <br>אימייל:${email} `
    }).then(
      message => {
            alert(message);
            console.log(message.Host);
        }
    );    
});


//content
cars_img.innerHTML=`<img src="/A_B_Cars_Images/car1.jpeg" class="d-block w-100" alt="...">`

bikoretText.innerHTML=bikorot[0].bikoret;
bikoretName.innerHTML=bikorot[0].name;


//style


bikoretF.style.marginTop= "-15px";
bikoretF.style.position= "absolute";

