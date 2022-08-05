// Como podemos rodar isso em um arquivo .ts sem causar erros? 


/*let employee = {};
employee.code = 10;
employee.name = "John";*/


interface Employee { // Por interface.
    code: number,
    name: string
}

let employee: Employee = { 
    code: 10,
    name: 'John',
}

console.log(employee);


let employee1 = { // Por inferência.
    code: 10,
    name: 'John'
}

console.log(employee1);

let employee2:{code: number, name: string} = { // Por tipagem antecipada.
    code: 10,
    name: 'John'
}

console.log(employee2);
