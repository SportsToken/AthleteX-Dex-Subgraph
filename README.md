# ATHLETEX Subgraph

TheGraph exposes a GraphQL endpoint to query the events and entities within the Athletex ecosystem.

Currently, there are multiple subgraphs, but additional subgraphs can be added to this repository, following the current architecture.

## Subgraphs

2. **[Exchange]()**: Tracks all AThletex Exchange data with price, volume, liquidity, ...

## Dependencies

- [Graph CLI](https://github.com/graphprotocol/graph-cli)
  - Required to generate and build local GraphQL dependencies.

```shell
yarn global add @graphprotocol/graph-cli
```

## Deployment

1. Run the `yarn codegen` command to prepare the TypeScript sources for the GraphQL (generated/\*).

2. Run the `yarn build` command to build the subgraph, and check compilation errors before deploying.

3. Run `graph auth --product hosted-service '<ACCESS_TOKEN>'`

4. Deploy via `yarn deploy`.

5. Or run `yarn deploy <ACCESS_TOKEN>`
