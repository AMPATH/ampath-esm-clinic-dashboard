import React from 'react';
import styles from './hiv-summary-label.component.scss';

interface HivSummaryLabelProps {
  title: string;
  label: React.ReactNode;
  titleStyles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
}

const HivSummaryLabel: React.FC<HivSummaryLabelProps> = ({ title, label, titleStyles, labelStyles }) => {
  return (
    <div className={styles.wrapper}>
      <p style={{ ...titleStyles }} className={styles.title}>
        {title}
      </p>
      <div style={{ ...labelStyles }} className={styles.label}>
        {label}
      </div>
    </div>
  );
};

export default HivSummaryLabel;
