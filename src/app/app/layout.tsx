type Props = Readonly<React.PropsWithChildren>;

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return <div className="flex h-dvh flex-col overflow-y-auto">{children}</div>;
};

export default DashboardLayout;
