import React, { FC } from 'react';

interface Props {
  name: string;
}

const Greeting: FC<Props> = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

export default Greeting;
