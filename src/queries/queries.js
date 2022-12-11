import { gql } from 'apollo-boost';

export const ALL_USERS_QUERY = gql`
  query {
    allUsers {
      email
      name
      role
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($email: ID!, $newAttributes: UserAttributesInput!) {
    updateUser(email: $email, newAttributes: $newAttributes) {
      name
      role
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUsers($emails: [ID]!) {
    deleteUsers(emails: $emails)
  }
`;

export const RESET_USERS_MUTATION = gql`
  mutation resetUsers{
    resetUsers
  }
`;
