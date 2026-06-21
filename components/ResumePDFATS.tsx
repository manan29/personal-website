'use client';

import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { experience, notableWins, tools } from '@/lib/experienceData';
import { calculateTotalExperience } from '@/lib/calculateDuration';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 36,
    paddingRight: 36,
    color: '#2D2D2D',
    lineHeight: 1.35,
  },

  // ── Header ──
  name: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
  },
  headerTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginTop: 2,
  },
  contactLine: {
    fontSize: 9,
    color: '#4A4744',
    marginTop: 4,
  },
  headerRule: {
    height: 0.5,
    backgroundColor: '#999999',
    marginTop: 8,
    marginBottom: 12,
  },

  // ── Section headings ──
  sectionHeading: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 11,
    marginBottom: 2,
  },
  sectionRule: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
    marginBottom: 6,
  },

  // ── Summary ──
  summary: {
    fontSize: 9,
    color: '#2D2D2D',
    lineHeight: 1.35,
  },

  // ── Company ──
  companyBlock: {
    marginBottom: 9,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  companyName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    flex: 1,
    marginRight: 8,
  },
  companyDates: {
    fontSize: 9,
    color: '#4A4744',
    flexShrink: 0,
  },
  companyTagline: {
    fontSize: 9,
    color: '#6B6960',
    marginTop: 2,
    marginBottom: 5,
  },

  // ── Role ──
  roleBlock: {
    marginTop: 4,
    marginBottom: 2,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  roleTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginRight: 8,
  },
  roleDates: {
    fontSize: 9,
    color: '#6B6960',
  },
  roleManager: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#4A4744',
    marginTop: 2,
    marginBottom: 3,
  },

  // ── Bullets ──
  bullet: {
    fontSize: 9,
    color: '#2D2D2D',
    lineHeight: 1.35,
    marginBottom: 1.5,
    marginLeft: 10,
  },

  // ── Results ──
  resultsHeading: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    marginTop: 3,
    marginBottom: 2,
  },
  resultsNote: {
    fontSize: 9,
    color: '#2D2D2D',
    lineHeight: 1.35,
    marginTop: 2,
  },

  // ── Skills ──
  skillLine: {
    fontSize: 9,
    color: '#2D2D2D',
    lineHeight: 1.35,
    marginBottom: 4,
  },
});

const totalYears = calculateTotalExperience('2015-06');

export default function ResumePDFATS() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Header ── */}
        <Text style={styles.name}>Manan Sachdeva</Text>
        <Text style={styles.headerTitle}>Head - Sales and Customer Success</Text>
        <Text style={styles.contactLine}>
          manan.sachdeva89@gmail.com  |  +91-9582006876  |  linkedin.com/in/manansachdeva
        </Text>
        <View style={styles.headerRule} />

        {/* ── Summary ── */}
        <Text style={styles.sectionHeading}>Summary</Text>
        <View style={styles.sectionRule} />
        <Text style={styles.summary}>
          {`Sales leader with ${totalYears} years of experience building revenue functions at SaaS startups - from individual contributor to Head of Sales and Customer Success. Skilled in complex enterprise deals, team building, and scaling go-to-market functions from 0 to 1.`}
        </Text>

        {/* ── Experience ── */}
        <Text style={styles.sectionHeading}>Experience</Text>
        <View style={styles.sectionRule} />
        {experience.map((company) => (
          <View key={company.name} style={styles.companyBlock}>
            <View style={styles.companyHeader}>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.companyDates}>{company.dates}</Text>
            </View>
            {company.tagline && (
              <Text style={styles.companyTagline}>{company.tagline}</Text>
            )}

            {company.roles.map((role, ri) => (
              <View key={role.title} style={[styles.roleBlock, ri === 0 && company.tagline ? { marginTop: 8 } : {}]}>
                <View style={styles.roleHeader}>
                  <Text style={styles.roleTitle}>{role.title}</Text>
                  <Text style={styles.roleDates}>{role.periodLabel}</Text>
                </View>
                {role.manager && (
                  <Text style={styles.roleManager}>
                    {`Reporting to: ${role.manager.name}, ${role.manager.title}`}
                  </Text>
                )}
                {role.bullets.map((bullet, i) => (
                  <Text key={i} style={styles.bullet}>{`-  ${bullet}`}</Text>
                ))}
                {role.results && (
                  <View style={{ marginTop: 3 }}>
                    <Text style={styles.resultsHeading}>{role.results.heading}</Text>
                    {role.results.items.map((item, i) => (
                      <Text key={i} style={styles.bullet}>{`-  ${item}`}</Text>
                    ))}
                    <Text style={styles.resultsNote}>{role.results.closingNote}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}

        {/* ── Key Achievements ── */}
        <Text style={styles.sectionHeading}>Key Achievements</Text>
        <View style={styles.sectionRule} />
        {notableWins.map((win) => (
          <Text key={win.label} style={styles.bullet}>
            {`-  ${win.number} - ${win.sub}`}
          </Text>
        ))}

        {/* ── Skills ── */}
        <Text style={styles.sectionHeading}>Skills</Text>
        <View style={styles.sectionRule} />
        {tools.map((tool) => (
          <View key={tool.category} style={{ flexDirection: 'row', marginBottom: 4 }}>
            <Text style={{ fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#2D2D2D' }}>
              {`${tool.category}: `}
            </Text>
            <Text style={{ fontSize: 9, color: '#2D2D2D', flex: 1 }}>
              {tool.items.join(', ')}
            </Text>
          </View>
        ))}

      </Page>
    </Document>
  );
}
