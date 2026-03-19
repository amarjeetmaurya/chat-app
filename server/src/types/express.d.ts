declare global {
  namespace Express {
    interface Request {
      otpSession?: any; // you can type this better later
    }
  }
}

export {};