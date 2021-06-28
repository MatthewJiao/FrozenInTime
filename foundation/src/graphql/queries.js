/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      startingLocation
      endingLocation
      date
      time
      trunkCapacity
      carType
      carColour
      PassengerCount
      cost
      sex
      ageStart
      ageEnd
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startingLocation
        endingLocation
        date
        time
        trunkCapacity
        carType
        carColour
        PassengerCount
        cost
        sex
        ageStart
        ageEnd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
