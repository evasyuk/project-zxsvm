// https://blog.bam.tech/developper-news/redux-persist-how-it-works-and-how-to-change-the-structure-of-your-persisted-store
import { defaultStateModal } from '../pieces/modals'

const migrations = {
  0: (state) => state,
  1: (state) => ({
    ...state,
    users: {
      myUser: state.auth.userRecord,
    },
    auth: {
      userRecord: undefined,
    },
    modals: defaultStateModal,
  }),
}

export default migrations
