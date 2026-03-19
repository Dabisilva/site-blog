import type { FC, ReactNode } from 'react';

type SupportSectionCardProps = {
  children: ReactNode;
  className?: string;
};

type SupportSectionCardComposition = FC<SupportSectionCardProps> & {
  Icon: FC<SupportSectionCardProps>;
  Title: FC<SupportSectionCardProps>;
  Text: FC<SupportSectionCardProps>;
};

const Root: FC<SupportSectionCardProps> = ({ children, ...props }) => (
  <div className={`flex flex-col gap-2 rounded-lg p-6 text-left md:p-12 ${props.className}`}>
    {children}
  </div>
);

const Icon: FC<SupportSectionCardProps> = ({ children, ...props }) => (
  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${props.className} mb-4`}>
    {children}
  </div>
);

const Title: FC<SupportSectionCardProps> = ({ children, ...props }) => (
  <strong className={`text-heading-sm text-gray-100 ${props.className}`}>{children}</strong>
);

const Text: FC<SupportSectionCardProps> = ({ children, ...props }) => (
  <p className={`text-body-sm text-gray-200 ${props.className}`}>{children}</p>
);

export const SupportSectionCard = Root as SupportSectionCardComposition;
SupportSectionCard.Icon = Icon;
SupportSectionCard.Title = Title;
SupportSectionCard.Text = Text;
