import { Box, Card, Flex, Heading, Separator, Table, Text, Container } from "@radix-ui/themes";

export default function Dashboard() {
  return (
    <Container>
      <Flex direction={"column"} width={"100%"} gap={"6"} p={"4"}>

        <Flex direction={"row"} gap={"4"} width={"100%"} wrap={"wrap"}>

          <Card size={"4"} asChild>
            <Flex direction={"column"}>
              <Text as="div" size={"4"} weight={"medium"}>Contas a pagar</Text>
              <Text as="div" weight={"bold"} size={"6"} mb={"4"} color="ruby">R$ 10.4654,00</Text>
              <Text as="div" size={"2"} color="gray">*Total de contas a pagar</Text>
            </Flex>
          </Card>

          <Card size={"4"} asChild>
            <Flex direction={"column"} gap={"2"}>
              <Text as="div" size={"4"} weight={"medium"}>Contas a receber</Text>
              <Text as="div" weight={"bold"} size={"6"} mb={"4"} color="indigo">R$ 0</Text>
              <Text as="div" size={"1"} color="gray">*Total de contas a pagar</Text>
            </Flex>
          </Card>

          <Card size={"4"} asChild>
            <Flex direction={"column"} gap={"2"} grow={"1"}>
              <Text as="div" size={"4"} weight={"medium"}>Resultado</Text>
              <Text as="div" weight={"bold"} size={"9"} mb={"4"} color="mint">R$ 0</Text>
              <Text as="div" size={"1"} color="gray">*Total de contas a pagar</Text>
            </Flex>
          </Card>

          <Separator size={"4"} />

          <Card size={"1"} asChild>
            <Flex direction={"column"} grow={"1"}>

              <Text as="div" weight={"medium"} mb={"4"}>Resumo contas a pagar</Text>

              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell >Vencimento</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Valor</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.RowHeaderCell> 11/11/2024 </Table.RowHeaderCell>
                    <Table.Cell> Conta de luz </Table.Cell>
                    <Table.Cell> R$ 538,56 </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Flex>
          </Card>

          <Card size={"1"} asChild>
            <Flex direction={"column"} grow={"1"}>

              <Text as="div" weight={"medium"} mb={"4"}>Resumo contas a receber</Text>

              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell >Vencimento</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Valor</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.RowHeaderCell> 11/11/2024 </Table.RowHeaderCell>
                    <Table.Cell> Conta de luz </Table.Cell>
                    <Table.Cell> R$ 538,56 </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Flex>
          </Card>

          <Card size={"5"} asChild>
            <Flex direction={"column"} grow={"1"}>
              <Text color="gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus assumenda porro voluptates eius magnam nesciunt ut, nobis distinctio. Possimus nam, vero hic sint quis eveniet itaque molestiae? Fugiat, recusandae vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ullam quas temporibus. Quae rem, minus ut ullam omnis quo itaque iusto maxime eveniet minima? Voluptatum minima dolorum ab repudiandae ratione! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum labore dolore dignissimos, deserunt eaque quaerat dolor? Consequatur consequuntur, non nostrum cumque mollitia atque, corporis vero odit quisquam dolor molestiae doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium, nobis eaque enim inventore facilis alias eveniet ad sed. Exercitationem ea deleniti maxime beatae, nisi veritatis doloremque minus dolorem sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium, corporis obcaecati, asperiores nihil suscipit dicta recusandae aperiam at consequatur voluptatibus. Suscipit libero nisi provident corrupti soluta veritatis consectetur et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium deleniti laborum fugit aspernatur repellendus, maiores odio sequi! Explicabo voluptas hic nulla aliquam labore inventore repellendus. Ducimus ullam harum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae nihil commodi eveniet dignissimos eaque omnis blanditiis nostrum harum molestiae totam, itaque alias neque quod sapiente, rem aliquam iure deleniti perferendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo, voluptatum accusantium, doloremque maiores illo fugiat beatae autem et aperiam iste neque quod provident fugit inventore, eveniet voluptas perspiciatis ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit mollitia fugit eos numquam nemo eum ipsum doloremque recusandae, magni in sapiente sint nostrum. Voluptatem quod ex nostrum dolore velit tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi nobis aperiam quam aut modi labore blanditiis vitae, quis deserunt delectus quod veniam nihil reiciendis obcaecati ex, exercitationem et corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem ducimus quibusdam accusantium modi perferendis itaque non vel earum atque consectetur harum ad facilis eveniet est, iste ipsum ipsa animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis ea minus dolorum voluptatum consectetur sint! Facilis commodi vel corporis distinctio harum nostrum cupiditate, fugiat facere similique blanditiis molestiae nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum sit et assumenda blanditiis labore excepturi, temporibus quaerat dicta molestiae deleniti unde neque totam quas officia in? Ipsam, error architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, rerum omnis. Ad recusandae labore illum culpa ex, cupiditate consequatur? Inventore, officia harum. Tempore maiores dolorem voluptate sit aperiam! Fugiat, deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero maiores ipsam ea ex voluptas, reiciendis sapiente obcaecati totam recusandae minima facere nemo aliquam veniam iste eveniet, perferendis cumque non?</Text>
            </Flex>
          </Card>



        </Flex>


      </Flex>
    </Container>
  )
}