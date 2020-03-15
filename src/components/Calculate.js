import operate from './Operate';
import Big from 'big.js';
export default function calculate (object,buttonName) {
    const isNumber = (buttonName) =>{
        return /[0-9]/.test(buttonName);
    }
    console.log(isNumber(buttonName));
    if(buttonName === "AC" ){
        return {
            total:null,
            next:null,
            operation:null
        }
    }

    if(isNumber(buttonName)){
        if(object.operation){
            if(object.next){
                return {next:object.next+buttonName}
            }
            return {next:buttonName} 
        }
        if (object.next) {
            
            const next = object.next === "0" ? buttonName : object.next + buttonName;
            return {
              next,
              total: null,
            };
          }
          return {
            next: buttonName,
            total: null,
          };
        }/* after pressing ,  */
        if (buttonName === ",") {
            if ( object.next) {
              
              return {
                
                next: object.next + ".",
                
              };
            }
           
        }
        /* @@@@@* */
        /* after pressing %  */
        if (buttonName === "%") {
            if (object.operation && object.next) {
              const result = operate(object.total, object.next, object.operation);
              return {
                total: result.div(100).toString(),
                next: null,
                operation: null,
              };
            }
            if (object.next) {
              return {
                next: Big(object.next).div(100).toString(),
              };
            }
            if (object.total) {
                return {
                  total:Big(object.total).div(100).toString(),
                };
              }
            return {};
          }

        /* @@@@@* */
        /* after pressing =  */
        if(buttonName === "="){
            if(object.operation && object.next){
            return  {
               total:operate(object.total, object.next, object.operation),
                next:null,
                operation:null
            }
        }
    }

        /* @@@@@* */
        if (!object.next) {
            return { operation: buttonName };
          }
        
          // save the operation and shift 'next' into 'total'
          return {
            total: object.next,
            next: null,
            operation: buttonName,
          };
    }
