import { gql, request } from "graphql-request";
const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clrt1d22z0gsg01w13k1yh6tw/master";
const getSlider = async () => {
  const query = gql`
    query getSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
const getCategory = async () => {
  const query = gql`
    query getCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
  getCategory,
};
