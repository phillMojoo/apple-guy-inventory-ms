import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, Barcode, Box, MapPin, History, AlertCircle, Tag, Truck } from 'lucide-react';
import { 
  Card,
  CardHeader,
  CardContent,
  CardFooter 
} from "@/components/ui/card";

export const ExpandableProductDisplay = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Example product data with extended information
  const product = {
    sku: "IPHN14P-256-GRY-5G",
    characteristics: {
      model: "iPhone 14 Pro",
      storage: "256GB",
      color: "Space Gray",
      connectivity: "5G"
    },
    stockLevel: 24,
    location: "Warehouse A",
    reorderPoint: 10,
    // Additional details shown in expanded view
    detailedInfo: {
      bin: "A-123-45",
      lastReceived: "2024-03-15",
      nextShipment: "2024-04-10",
      warranty: "1 Year Limited",
      price: 999.99,
      supplier: "Apple Direct",
      minimumOrder: 5,
      serialNumbers: ["SN123456", "SN123457", "SN123458"],
      locationHistory: [
        { date: "2024-03-15", action: "Received", quantity: 30 },
        { date: "2024-03-20", action: "Sold", quantity: -6 }
      ]
    }
  };

  return (
    <Card className="max-w-md">
      <CardHeader className="border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{product.characteristics.model}</h3>
            <div className="flex gap-2 text-sm text-gray-600">
              <span>{product.characteristics.storage}</span>
              <span>•</span>
              <span>{product.characteristics.color}</span>
              <span>•</span>
              <span>{product.characteristics.connectivity}</span>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
          >
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>
      </CardHeader>

      <CardContent className="py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">Stock Level</div>
            <div className={`px-2 py-1 rounded-full text-sm ${
              product.stockLevel > product.reorderPoint 
                ? 'bg-green-100 text-green-800' 
                : 'bg-orange-100 text-orange-800'
            }`}>
              {product.stockLevel} units
            </div>
          </div>
          <div className="text-sm text-gray-600">{product.location}</div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 space-y-4">
            {/* Location Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location Details
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Warehouse</div>
                  <div className="font-medium">{product.location}</div>
                </div>
                <div>
                  <div className="text-gray-600">Bin Location</div>
                  <div className="font-medium">{product.detailedInfo.bin}</div>
                </div>
              </div>
            </div>

            {/* Inventory Status */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Box className="h-4 w-4" />
                Inventory Status
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Current Stock</div>
                  <div className="font-medium">{product.stockLevel} units</div>
                </div>
                <div>
                  <div className="text-gray-600">Reorder Point</div>
                  <div className="font-medium">{product.reorderPoint} units</div>
                </div>
                <div>
                  <div className="text-gray-600">Next Shipment</div>
                  <div className="font-medium">{product.detailedInfo.nextShipment}</div>
                </div>
                <div>
                  <div className="text-gray-600">Minimum Order</div>
                  <div className="font-medium">{product.detailedInfo.minimumOrder} units</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <History className="h-4 w-4" />
                Recent Activity
              </h4>
              <div className="space-y-2">
                {product.detailedInfo.locationHistory.map((history, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <div className="text-gray-600">{history.date}</div>
                    <div>{history.action}</div>
                    <div className={history.quantity > 0 ? 'text-green-600' : 'text-red-600'}>
                      {history.quantity > 0 ? '+' : ''}{history.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Technical Details
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Barcode className="h-4 w-4 text-gray-600" />
                  <span className="font-mono">{product.sku}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-gray-600" />
                  <span>Warranty: {product.detailedInfo.warranty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-gray-600" />
                  <span>Price: ${product.detailedInfo.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-gray-600" />
                  <span>Supplier: {product.detailedInfo.supplier}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="bg-gray-50">
        <div className="flex justify-between w-full text-sm">
          <button className="text-blue-600 hover:text-blue-800">View Details</button>
          <button className="text-blue-600 hover:text-blue-800">Update Stock</button>
        </div>
      </CardFooter>
    </Card>
  );
};