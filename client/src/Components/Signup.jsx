
import { useState } from 'react';
import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); 
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/users/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log('Registration successful');
        setRegistrationSuccess(true);
        
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          setRegistrationSuccess(false);
        }, 3000); 
      } else {
        console.error('Registration failed');
        setErrorMessage('Registration failed. Please try again.');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000); // Hide the error message after 3 seconds
        // Handle registration failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); 
    }
  };

  return (
    <Container maxW={'container.xl'} h={'110vh'} p={'6'}>
      {registrationSuccess && (
        <Text textAlign={'center'} color={'green.500'} mb={4}>
          Registration successful! You can now log in.
        </Text>
      )}

      {errorMessage && (
        <Text textAlign={'center'} color={'red.500'} mb={4}>
          {errorMessage}
        </Text>
      )}

      <form onSubmit={handleSignup}>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
          <Heading textAlign={'center'} color={'#0174BE'}>
            Register
          </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder='Name'
            type='text'
            required
            focusBorderColor='blue.500'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <Button colorScheme={'blue'} type='submit'>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Sign Up?{' '}
            <Button variant={'link'} colorScheme={'blue '}>
              <a href='/login'>Log In</a>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;




