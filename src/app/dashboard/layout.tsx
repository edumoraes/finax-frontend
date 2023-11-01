import { ExitIcon } from "@radix-ui/react-icons"
import { Box, Button, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes"
import Link from "next/link"

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Flex direction={"column"} className="h-screen relative">

        <Flex direction={"column"} className="fixed w-64 h-screen top-0 left-0 bg-accent-9-contrast border-r border-grayA-6">

          <Text className="p-4" color="mint" weight={"bold"} size={"6"}>Finax®</Text>

          <Flex direction={"column"} gap={"2"} height={"100%"} align={"stretch"} justify={"between"}>
            <Flex asChild direction={"column"} gap={"4"} p={"4"}>
              <ul>
                <li>
                  <Link href={'/dashboard/resumo'} className="hover:text-accent-accent-9">
                    <Text as="div" className="hover:text-accent-9">Resumo</Text>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/conta-pagar'}>
                    <Text as="div" className="hover:text-accent-9">Contas a Pagar</Text>
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/conta-receber'}>
                    <Text as="div" className="hover:text-accent-9">Contas a Receber</Text>
                  </Link>
                </li>
              </ul>
            </Flex>
            <Flex direction={"column"} p={"4"}>
              <Button variant="surface" className="w-full">
                Sair <ExitIcon />
              </Button>
            </Flex>
          </Flex>

        </Flex>

        <Flex direction={"column"} className="pl-64">
          <Flex direction={"column"} gap={"1"} p={"4"} className="bg-gray-2">
            <Heading>Dashboard</Heading>
            <Box>
              <Text color="gray" weight={"medium"} size={"1"}>Dashboard </Text>
              <Text color="gray" size={"1"}> &gt; Resumo</Text>
            </Box>
          </Flex>
          <Separator size={"4"} />
          {children}
        </Flex>
      </Flex>
    </>
  )
}