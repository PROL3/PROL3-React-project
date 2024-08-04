import PizzaCard from "../Components/PizzaCard";

export const pizzaGenerator = (arr) => {
 
    const newarr = arr.map((item,index) => {
        
      return <PizzaCard pizza={item} key={index}></PizzaCard>
       
    });
    

    return newarr;
}
