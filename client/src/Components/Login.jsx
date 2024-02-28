

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); // State variable for login error
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        console.error('Login failed');
        // Parse the response for a specific error message (if available)
        const errorData = await response.json();
        setLoginError(errorData.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('An error occurred during login.');
    }
  };

  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      {loginError && <Text color="red.500" textAlign={'center'}>{loginError}</Text>}

      <form onSubmit={handleSubmit}>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
          <Heading style={{color:"#0174BE", textAlign:"center"}}>Welcome</Heading>
          <Input
            placeholder='Email'
            type='email'
            required
            focusBorderColor='blue.500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder='Password'
            type={'password'}
            required
            focusBorderColor='blue.500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <a href='/forgetpassword'>Forget Password?</a>
          </Button>

          <Button colorScheme={'blue'} type='submit'>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'blue '}>
              <a href='./signup'>Sign Up</a>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
