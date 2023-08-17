import request,{gql} from "graphql-request"


export const getCarsList=async()=>{
    const query=gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          seat
          image {
            url
          }
          carType
        }
      }      
    `

    const result=await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clldztc6841zx01umdqjv9xok/master',query);
    return result;
}