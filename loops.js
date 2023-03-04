for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['max', 'anna', 'joel'];


for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'max',
    age: 32,
    inAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
};

let isFinished = true;

while (isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!')