interface Props {
  name: string;
  age: number;
}

export const registryUser = ({ name, age }: Props) => {
  let users = [
    { name: 'test', age: 7 },
  ];

  if (!name && !age) {
    console.log('To registry a user you need to pass name and age properies');
    return;
  }

  console.log('Creating a user, please wait...');

  setTimeout(() => {
    users.push({ name, age });
    console.log('User successfully created!');
  }, 3000);



  setTimeout(() => console.log('Here is a list with users', users), 4000);
}
