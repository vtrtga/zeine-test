import ProductForm from "@/components/form-product/form-product";
import { ProductFormValues } from "@/types";

interface ProductRegisterViewProps {
  handleRegister: (values: ProductFormValues) => void;
  loading: boolean;
}

function ProductRegisterView({ handleRegister, loading }: ProductRegisterViewProps) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProductForm onSubmit={handleRegister} loading={loading} />
    </div>
  );
}

export default ProductRegisterView;
