import { lowerCase } from 'lodash';
import { Something }  from '../../../some_library/src';

interface Person{
    name: string;
    id: number;
}

const john: Person = {
    name: "John",
    id: 1
}

const jack: Person = {
    name: "Jack",
    id: 2
}

const lowerName = lowerCase(john.name)

const something = new Something();

const combine = john.name + jack.name
const ids = john.id + jack.id

console.log(ids)
