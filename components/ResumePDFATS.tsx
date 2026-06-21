'use client';

import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { experience, notableWins, tools } from '@/lib/experienceData';
import { calculateTotalExperience } from '@/lib/calculateDuration';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#1A1A1A',
    lineHeight: 1.4,
  },

  // ── Header ──
  name: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginBottom: 3,
  },
  titleText: {
    fontSize: 10,
    color: '#1A1A1A',
    marginBottom: 2,
  },
  contactLine: {
    fontSize: 10,
    color: '#1A1A1A',
    marginBottom: 12,
  },

  // ── Section headings ──
  sectionHeading: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginTop: 14,
    marginBottom: 5,
  },

  // ── Summary ──
  summary: {
    fontSize: 10,
    color: '#1A1A1A',
    lineHeight: 1.4,
    marginBottom: 4,
  },

  // ── Company ──
  companyBlock: {
    marginBottom: 10,
  },
  companySeparator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
    marginTop: 6,
    marginBottom: 6,
  },
  companyName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginBottom: 1,
  },
  companyMeta: {
    fontSize: 10,
    color: '#1A1A1A',
    marginBottom: 1,
  },
  companyTagline: {
    fontSize: 10,
    color: '#1A1A1A',
    marginBottom: 3,
  },

  // ── Role ──
  roleBlock: {
    marginTop: 4,
    marginBottom: 3,
  },
  roleTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginBottom: 1,
  },
  roleDates: {
    fontSize: 10,
    color: '#1A1A1A',
    marginBottom: 1,
  },
  roleManager: {
    fontSize: 10,
    color: '#1A1A1A',
    marginBottom: 3,
  },
  bullet: {
    fontSize: 10,
    color: '#1A1A1A',
    lineHeight: 1.4,
    marginBottom: 2,
    marginLeft: 12,
  },

  // ── Results ──
  resultsHeading: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginTop: 4,
    marginBottom: 2,
  },
  resultsNote: {
    fontSize: 10,
    color: '#1A1A1A',
    lineHeight: 1.4,
    marginTop: 2,
  },

  // ── Key Achievements ──
  achievementBullet: {
    fontSize: 10,
    color: '#1A1A1A',
    lineHeight: 1.4,
    marginBottom: 3,
    marginLeft: 12,
  },

  // ── Skills ──
  skillLine: {
    fontSize: 10,
    color: '#1A1A1A',
    lineHeight: 1.4,
    marginBottom: 3,
  },
});

const totalYears = calculateTotalExperience('2015-06');

export default function ResumePDFATS() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <Text style={styles.name}>Manan Sachdeva</Text>
        <Text style={styles.titleText}>Seller, Coach</Text>
        <Text style={styles.contactLine}>
          manan.sachdeva89@gmail.com  |  +91-9582006876  |  linkedin.com/in/manansachdeva
        </Text>

        {/* ── Summary ── */}
        <Text style={styles.sectionHeading}>Summary</Text>
        <Text style={styles.summary}>
          {`Sales leader with ${totalYears} years of experience building revenue functions at SaaS startups - from individual contributor to Head of Sales and Customer Success. Skilled in complex enterprise deals, team building, and scaling go-to-market functions from 0 to 1.`}
        </Text>

        {/* ── Experience ── */}
        <Text style={styles.sectionHeading}>Experience</Text>
        {experience.map((company, ci) => (
          <View key={company.name}>
            {ci > 0 && <View style={styles.companySeparator} />}
            <View style={styles.companyBlock}>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.companyMeta}>{company.dates}</Text>
              {company.tagline && (
                <Text style={styles.companyTagline}>{company.tagline}</Text>
              )}

              {company.roles.map((role) => (
                <View key={role.title} style={styles.roleBlock}>
                  <Text style={styles.roleTitle}>{role.title}</Text>
                  <Text style={styles.roleDates}>{role.periodLabel}</Text>
                  {role.manager && (
                    <Text style={styles.roleManager}>
                      {`Reporting to: ${role.manager.name}, ${role.manager.title}`}
                    </Text>
                  )}
                  {role.bullets.map((bullet, i) => (
                    <Text key={i} style={styles.bullet}>{`\u2022  ${bullet}`}</Text>
                  ))}
                  {role.results && (
                    <View style={{ marginTop: 4, marginBottom: 2 }}>
                      <Text style={styles.resultsHeading}>{role.results.heading}</Text>
                      {role.results.items.map((item, i) => (
                        <Text key={i} style={styles.bullet}>{`\u2022  ${item}`}</Text>
                      ))}
                      <Text style={styles.resultsNote}>{role.results.closingNote}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* ── Key Achievements ── */}
        <Text style={styles.sectionHeading}>Key Achievements</Text>
        {notableWins.map((win) => (
          <Text key={win.label} style={styles.achievementBullet}>
            {`\u2022  ${win.number} - ${win.sub}`}
          </Text>
        ))}

        {/* ── Skills ── */}
        <Text style={styles.sectionHeading}>Skills</Text>
        {tools.map((tool) => (
          <Text key={tool.category} style={styles.skillLine}>
            {`${tool.category}: ${tool.items.join(', ')}`}
          </Text>
        ))}

      </Page>
    </Document>
  );
}
