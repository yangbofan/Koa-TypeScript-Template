import * as fs from 'fs'

const fsPromises = fs.promises

export async function createDirectory (directoryPath: string): Promise<void> {
  try {
    await fsPromises.mkdir(directoryPath, { recursive: true })
    console.log('Directory created successfully:', directoryPath)
  } catch (error) {
    console.error('Error creating directory:', error)
  }
}
