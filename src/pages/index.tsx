import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/form/input'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8" // = 2rem or 32px
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
