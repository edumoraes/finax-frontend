'use client'

import { EnvelopeClosedIcon, EnvelopeOpenIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Box, Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Flex height={'100%'} align={'center'} className='min-h-screen bg-accent-1'>
        <Card mx={'auto'} className='w-[450px] -translate-y-16' size={'5'}>
          <form>
            <Flex direction={'column'} gap={'5'}>

              <Heading as='h1'>
                Cadastrar
              </Heading>

              <Box>
                <Text slot='label' color='gray'>
                  Nome*
                </Text>
                <TextField.Root size={'3'}>
                  <TextField.Slot>
                    <PersonIcon />
                  </TextField.Slot>
                  <TextField.Input placeholder='Se nome' type='text' required />
                </TextField.Root>
              </Box>

              <Box>
                <Text slot='label' color='gray'>
                  Sobrenome
                </Text>
                <TextField.Root size={'3'}>

                  <TextField.Input placeholder='Seu sobrenome' type='text' />
                </TextField.Root>
              </Box>

              <Box>
                <Text slot='label' color='gray'>
                  Email*
                </Text>
                <TextField.Root size={'3'}>
                  <TextField.Slot>
                    <EnvelopeClosedIcon />
                  </TextField.Slot>
                  <TextField.Input placeholder='email@exemplo.com' type='email' required />
                </TextField.Root>
              </Box>

              <Box>
                <Text slot='label' color='gray'>
                  Senha*
                </Text>

                <TextField.Root size={'3'}>
                  <TextField.Slot>
                    <LockClosedIcon />
                  </TextField.Slot>
                  <TextField.Input placeholder='Digite sua senha' type='password' required />
                </TextField.Root>
              </Box>

              <Flex justify={'end'} gap={'2'} mt={'4'} >

                <Button size={'3'} type='submit'>
                  Criar conta
                </Button>
              </Flex>


            </Flex>
          </form>
        </Card>
      </Flex>

    </main>
  )
}
