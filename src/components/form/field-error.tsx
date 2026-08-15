type FieldErrorProps = {
  id: string;
  children: string;
};

export default function FieldError({ id, children }: FieldErrorProps) {
  return (
    <p id={id} className="text-red">
      {children}
    </p>
  );
}
