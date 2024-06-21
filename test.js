
//task1:
const array = [1, 2, 3]
async function affich()
{
    for(let i=0;i<array.length;i++)
        {

        await new Promise((resolve) => 
        {
            setTimeout(() => {
                console.log(el);
                resolve();
            }, 1000);
        });
    }
 }
   affich();

   //task2//
   function fetchData() {
    
        setTimeout(async() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1').then((data)=>console.log(data)).catch((errur)=>console.log('err'))
        }, 2000);
    };

   async function waitCall (){
   try
   {
    const response = await fetchdata()
    console.log(response);
    

   }
   catch (errur){console.log('ereur')}}
   
