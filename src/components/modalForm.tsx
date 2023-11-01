'use client'

import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Select, Text, TextField } from "@radix-ui/themes";

export default function ModalForm() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Cadastrar Conta <PlusIcon /> </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Cadastrar Conta</Dialog.Title>
        <Dialog.Description>
          <Text>Contas a pagar</Text>
        </Dialog.Description>
        <form>
          <Flex gap={"4"} wrap={"wrap"}>

            <Flex direction={"column"} slot="label" grow={"1"}>
              <Text as="div">Vencimento</Text>
              <TextField.Input type="date" size={"3"} />
            </Flex>

            <Flex direction={"column"} slot="label" grow={"1"}>
              <Text as="div">Documento</Text>
              <TextField.Input type="text" size={"3"} />
            </Flex>

            <Flex direction={"column"} slot="label" width={"100%"}>
              <Text as="div">Descrição</Text>
              <TextField.Input type="text" size={"3"} />
            </Flex>

            <Flex direction={"column"} slot="label" grow={"1"}>
              <Text as="div">Fornecedor</Text>
              <Select.Root size={"3"} defaultValue="item1">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="item1">Item 1</Select.Item>
                  <Select.Item value="item2">Item 2</Select.Item>
                  <Select.Item value="item3">Item 3</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction={"column"} slot="label" grow={"1"}>
              <Text as="div">Valor</Text>
              <TextField.Input type="number" size={"3"} />
            </Flex>

            <Flex width={"100%"} justify={"end"} gap={"2"}>
              <Dialog.Close>
                <Button color="gray">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>
                  Salvar
                </Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}