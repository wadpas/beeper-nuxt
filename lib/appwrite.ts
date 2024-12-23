import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite'

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.wad.cull',
  projectId: '6768fe1900160299ee78',
  databaseId: '67690a84001b6cf421c0',
  userCollectionId: '67690ae60037f3e4448f',
  videosCollectionId: '67690b1d003a0ece6a10',
  storageId: '67690e560034f2793087',
}

const client = new Client()

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform)

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email: any, password: any, username: any) => {
  try {
    const userAccount = await account.create(ID.unique(), email, password, username)
    if (!userAccount) throw new Error('Error creating user')
    const avatar = avatars.getInitials(username)
    await singIn(email, password)
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: userAccount.$id,
        username,
        email,
        avatar,
      }
    )

    return newUser
  } catch (error) {
    console.log(error)
    throw new Error('Error creating user')
  }
}

export const singIn = async (email: any, password: any) => {
  try {
    const currentAccount = await account.get()
    if (currentAccount) {
      await account.deleteSessions()
    }
    const session = await account.createEmailPasswordSession(email, password)
    if (!session) throw new Error('Error creating session')
    return session
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Error creating session')
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()
    console.log(currentAccount.$id)

    if (!currentAccount) throw new Error('Error getting current user')
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )
    if (!currentUser) throw new Error('Error getting current user')
    console.log(currentUser)
    return currentUser.documents[0]
  } catch (error) {
    console.log(error)
    throw new Error('Error getting current user')
  }
}
