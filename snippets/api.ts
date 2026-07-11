import express from 'express';
import { verifyPurchase } from './purchaseVerification'; // Assume this function verifies the purchase with Google Play or Apple App Store
import { checkDeviceIntegrity } from './deviceIntegrityCheck'; // Assume this function checks if the device is tampered

const app = express();
app.use(express.json());

interface VerificationRequest {
  receipt: string;
  deviceId: string;
}

app.post('/verify-purchase', async (req, res) => {
  const { receipt, deviceId }: VerificationRequest = req.body;

  try {
    // Verify the purchase
    const isPurchaseValid = await verifyPurchase(receipt);
    if (!isPurchaseValid) {
      return res.status(403).json({ message: 'Invalid purchase' });
    }

    // Check device integrity
    const isDeviceIntact = await checkDeviceIntegrity(deviceId);
    if (!isDeviceIntact) {
      return res.status(403).json({ message: 'Device tampered' });
    }

    // If both checks pass, the user can proceed with the game
    res.json({ message: 'Purchase verified and device is intact', success: true });
  } catch (error) {
    console.error('Error during verification:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});