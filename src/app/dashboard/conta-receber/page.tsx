import ModalForm from "@/components/modalForm";
import { PlusIcon } from "@radix-ui/react-icons";
import { Badge, Button, Card, Container, Flex, Separator, Table, Text } from "@radix-ui/themes";

export default function ContaReceber() {
  return (
    <Container>
      <Flex direction={"column"} width={"100%"} gap={"6"} p={"4"}>

        <Flex direction={"row"} gap={"4"} width={"100%"} wrap={"wrap"}>

          <Card size={"4"} asChild>
            <Flex direction={"column"}>
              <Text as="div" size={"4"} weight={"medium"}>Contas pagas</Text>
              <Text as="div" weight={"bold"} size={"6"} mb={"4"} color="indigo">R$ 10.4654,00</Text>
              <Text as="div" size={"2"} color="gray">*Total de contas a pagar</Text>
            </Flex>
          </Card>

          <Card size={"4"} asChild>
            <Flex direction={"column"} gap={"2"}>
              <Text as="div" size={"4"} weight={"medium"}>Contas a pagar</Text>
              <Text as="div" weight={"bold"} size={"6"} mb={"4"} color="gray">R$ 0</Text>
              <Text as="div" size={"1"} color="gray">*Total de contas a pagar</Text>
            </Flex>
          </Card>

          <Card size={"4"} asChild>
            <Flex direction={"column"} gap={"2"}>
              <Text as="div" size={"4"} weight={"medium"}>Contas vencidas</Text>
              <Text as="div" weight={"bold"} size={"6"} mb={"4"} color="ruby">R$ 0</Text>
              <Text as="div" size={"1"} color="gray">*Total de contas a pagar</Text>
            </Flex>
          </Card>


          <Separator size={"4"} />

          <Card size={"1"} asChild>
            <Flex direction={"column"} grow={"1"}>

              <Flex align={"center"} justify={"between"} mb={"4"}>
                <Text as="div" weight={"medium"}>Contas a pagar</Text>
                <ModalForm />
              </Flex>


              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell >Vencimento</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell >Documento</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Fornecedor</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Valor</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Valor pago</Table.ColumnHeaderCell>

                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.RowHeaderCell> 11/11/2024 </Table.RowHeaderCell>
                    <Table.Cell> asdfdsafasdf </Table.Cell>
                    <Table.Cell> Conta de Luz </Table.Cell>
                    <Table.Cell> Amazonas Energia </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                    <Table.Cell> <Badge className="w-full justify-center">Pago</Badge> </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell> 11/11/2024 </Table.RowHeaderCell>
                    <Table.Cell> asdfdsafasdf </Table.Cell>
                    <Table.Cell> Conta de Luz </Table.Cell>
                    <Table.Cell> Amazonas Energia </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                    <Table.Cell > <Badge color="gray" className="w-full justify-center">Pendente</Badge> </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell> 11/11/2024 </Table.RowHeaderCell>
                    <Table.Cell> asdfdsafasdf </Table.Cell>
                    <Table.Cell> Conta de Luz </Table.Cell>
                    <Table.Cell> Amazonas Energia </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                    <Table.Cell > <Badge color="ruby" className="w-full justify-center">Atrasado</Badge> </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell> 11/11/2024 </Table.RowHeaderCell>
                    <Table.Cell> asdfdsafasdf </Table.Cell>
                    <Table.Cell> Conta de Luz </Table.Cell>
                    <Table.Cell> Amazonas Energia </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                    <Table.Cell > <Badge color="amber" className="w-full justify-center">Cancelado</Badge> </Table.Cell>
                    <Table.Cell> R$ 465,23 </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Container>
  )
}