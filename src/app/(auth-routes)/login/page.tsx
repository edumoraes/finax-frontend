'use client'

import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Box, Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Home() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter()

  async function handleSubmit() {

    const result = await signIn('Credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result);
      return
    }

    router.replace('/admin')

    // const res = await fetch(`http://localhost:8080/auth`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: email,
    //     password: password
    //   }),
    //   headers: { 'Content-Type': 'application/json', 'Accept': '*/*' }
    // })

    // const data = await res.json()
    // console.log(data);


  }

  return (
    <main>
      <Flex height={'100%'} align={'center'} className='min-h-screen bg-accent-1'>
        <Card mx={'auto'} className='w-[450px] -translate-y-16' size={'5'}>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            <Flex direction={'column'} gap={'5'}>

              <Heading as='h1'>
                Login
              </Heading>

              <Box>
                <Text slot='label' color='gray'>
                  Email
                </Text>
                <TextField.Root size={'3'}>
                  <TextField.Slot>
                    <PersonIcon />
                  </TextField.Slot>
                  <TextField.Input placeholder='email@exemplo.com' type='email'
                    name='email' id='email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </TextField.Root>
              </Box>

              <Box>
                <Flex justify={'between'}>
                  <Text slot='label' color='gray'>
                    Senha
                  </Text>
                  <Link href={'#'}>
                    <Text as='div' className='text-accent-9'>
                      Esqueceu a senha?
                    </Text>
                  </Link>
                </Flex>

                <TextField.Root size={'3'}>
                  <TextField.Slot>
                    <LockClosedIcon />
                  </TextField.Slot>
                  <TextField.Input placeholder='Digite sua senha' type='password'
                    name='password' id='password' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit }} />
                </TextField.Root>
              </Box>

              <Flex justify={'end'} gap={'2'} mt={'4'} >
                <Link href={'/cadastrar'}>
                  <Button size={'3'} variant='soft' color='gray' type='button'>
                    Criar conta
                  </Button>
                </Link>

                <Button size={'3'} type='submit' >
                  Entrar
                </Button>
              </Flex>

              <pre>
                {JSON.stringify({ email, password }, null, 2)}
              </pre>
            </Flex>
          </form>
        </Card>
      </Flex>

    </main>
  )
}
