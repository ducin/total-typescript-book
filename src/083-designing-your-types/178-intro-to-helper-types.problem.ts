type ErrorShape = {
  error: {
    message: string;
  };
};

type UserDataShape =
  | {
      data: {
        id: string;
        name: string;
        email: string;
      };
    }
  | ErrorShape;

type PostDataShape =
  | {
      data: {
        id: string;
        title: string;
        body: string;
      };
    }
  | ErrorShape;

type tests = [
  Expect<
    Equal<
      UserDataShape,
      | {
          data: {
            id: string;
            name: string;
            email: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
  Expect<
    Equal<
      PostDataShape,
      | {
          data: {
            id: string;
            title: string;
            body: string;
          };
        }
      | {
          error: {
            message: string;
          };
        }
    >
  >,
];